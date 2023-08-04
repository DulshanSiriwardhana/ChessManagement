function CreateFile(){
    //Your text file location on system
    var savefile = "D://MoneyManagment//Data//textfile.txt";
    try {
        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
        var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
    file.initWithPath( savefile );
    if ( file.exists() == false ) {
        alert( "Creating file... " );
        file.create( Components.interfaces.nsIFile.NORMAL_FILE_TYPE, 420 );
    }

    var outputStream = Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance( Components.interfaces.nsIFileOutputStream );
    outputStream.init( file, 0x04 | 0x08 | 0x20, 420, 0 );
    var output = "Your text here";
    var result = outputStream.write( output, output.length );
    outputStream.close();

    alert("Done");
    } 
    catch (e) {
        alert("Some error occured");
    }
}

function Login()
{
    var UserName=document.getElementById('Email').value;
    var PassWord=document.getElementById('Password').value;
    alert(UserName+" "+PassWord);
    if(UserName=='Email' && PassWord=='1234')
    {
        alert("Login is Succeeded");
        window.location='Main.html';
    }
    else if(UserName=='Admin' && PassWord=='1234')
    {
        alert("Login is Succeeded");
        document.getElementById('subname').value='Admin';
        window.location='Main.html';
    }
    else{
        alert("Login failed!");
    }
}

function Pairing(){
    window.location='PairingPage.html';
}