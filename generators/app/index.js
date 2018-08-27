var Generator = require('yeoman-generator');

module.exports = class extends Generator {
        async promptForDetails() {
            this.answers = await this.prompt([{
                type: 'input',
                name: 'component_name',
                message: 'enter component name',
                default: this.appname,
                store: true
            },{
                type: 'input',
                name: 'folder_path',
                message: 'enter folder path',
                default: '.\\',
                store: true
            },{
                type: 'input',
                name: 'state_name',
                message: 'enter symbol of state from reducer',
                default: 'data',
                store: true
            },{
                type: 'input',
                name: 'property_name',
                message: 'enter symbols for state properties in comma separated list',
                default: 'property',
                store: true
            },{
                type: 'input',
                name: 'dispatch_name',
                message: 'enter dispatch symbols in comma separated list',
                default: 'dispatch',
                store: true
            }]);
        }

        writing() {
            this.fs.copyTpl(
              this.templatePath('ComponentConnected.tsx'),
              this.destinationPath('ComponentConnected.tsx'),
              { property: this.answers.property_name,
                dispatch: this.answers.dispatch_name,
                state: this.answers.state_name
            }
            );
          }

};