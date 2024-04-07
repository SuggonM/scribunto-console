var ScribuntoConsole = require('./scribunto-console.js');

var SC = new ScribuntoConsole({
    hostname: 'guardian-tales.fandom.com',
    apiPath: '/api.php',
    title: 'Module:LuaModule'
});

SC.setContentFromFile('./LuaModule.lua');

SC.exec('p.debug()').then((res) => {
    var success = res.exec.type === 'normal';
    var error = res.exec.type === 'error';

    if (success) {
        console.log(res.exec.print);
        return;
    }
    if (error) {
        process.stdout.write('⚠️  ');
        console.error(res.exec.message);
        return;
    }

    console.log(res.exec);
});
