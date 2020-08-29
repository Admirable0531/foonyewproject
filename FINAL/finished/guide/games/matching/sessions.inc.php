    <?php

    $sdbc = null;  //数据库连接句柄，在后面的函数里面让它成为全局变量

    //启动会话
    function open_session()
    {
        global $sdbc;      //使用全局的$sdbc
        $sdbc = mysqli_connect('128.199.221.94', 'yhphdrqswp', 'n5Cu5YgZYy', 'yhphdrqswp');     //数据库 test
        if (!$sdbc) {
            return false;
        }
        return true;
    }

    //关闭会话
    function close_session()
    {
        global $sdbc;
        return mysqli_close($sdbc);
    }

    //读取会话数据
    function read_session($sid)
    {
        global $sdbc;
        $sql = sprintf("SELECT data FROM sessions WHERE id='%s'", mysqli_real_escape_string($sdbc, $sid));
        $res = mysqli_query($sdbc, $sql);
        if (mysqli_num_rows($res) == 1) {
            list($data) = mysqli_fetch_array($res, MYSQLI_NUM);
            return $data;
        } else {
            return '';
        }
    }

    //写入会话数据
    function write_session($sid, $data)
    {
        global $sdbc;
        $sql = sprintf("INSERT INTO sessions(id,data,last_accessed) VALUES('%s','%s','%s')", mysqli_real_escape_string($sdbc, $sid), mysqli_real_escape_string($sdbc, $data), date("Y-m-d H:i:s", time()));
        $res = mysqli_query($sdbc, $sql);
        if (!$res) {
            return false;
        }
        return true;
    }

    //销毁会话数据
    function destroy_session($sid)
    {
        global $sdbc;
        $sql = sprintf("DELETE FROM sessions WHERE id='%s'", mysqli_real_escape_string($sdbc, $sid));
        $res = mysqli_query($sdbc, $sql);
        $_SESSION = array();
        if (!mysqli_affected_rows($sdbc) == 0) {
            return false;
        }
        return true;
    }

    //执行垃圾回收（删除旧的会话数据）
    function clean_session($expire)
    {
        global $sdbc;
        $sql = sprintf("DELETE FROM sessions WHERE DATE_ADD(last_accessed,INTERVAL %d SECOND)<NOW()", (int)$expire);
        $res = mysqli_query($sdbc, $sql);
        if (!$res) {
            return false;
        }
        return true;
    }

    //告诉PHP使用会话处理函数
    session_set_save_handler('open_session', 'close_session', 'read_session', 'write_session', 'destroy_session', 'clean_session');

    //启动会话，该函数必须在session_set_save_handler()函数后调用，不然我们所定义的函数就没法起作用了。
    session_start();

    //由于该文件被包含在需要使用会话的php文件里面，因此不会为其添加PHP结束标签