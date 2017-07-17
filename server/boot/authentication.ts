import { BootScript } from '@mean-expert/boot-script';

@BootScript()
class Authentication {
    constructor(app: any) {
        app.enableAuth({datasource:"db"});
    }
}

module.exports = Authentication;