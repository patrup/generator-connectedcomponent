var Generator = require('yeoman-generator');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = class extends Generator {
    async promptForDetails() {
        this.answers = await this.prompt([{
            type: 'input',
            name: 'component_name',
            message: 'enter component name',
            default: this.appname,
            store: true
        },
        {
            type: 'input',
            name: 'state_name',
            message: 'enter symbol of state from reducer',
            default: 'data',
            store: true
        },
        {
            type: 'input',
            name: 'property_name',
            message: 'enter symbol for state property',
            default: 'property',
            store: true
        },
        {
            type: 'input',
            name: 'dispatch_name',
            message: 'enter dispatch symbol',
            default: 'dispatch',
            store: true
        },
        {
            type: 'input',
            name: 'actionsFile_name',
            message: 'enter file name of actions file',
            default: 'actions',
            store: true
        }
        ]);
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath('ComponentConnected.tsx'),
            this.destinationPath('.\\' + capitalizeFirstLetter(this.answers.component_name) + 'Connected.tsx'),
            {
                property: this.answers.property_name,
                dispatch: this.answers.dispatch_name,
                state: this.answers.state_name,
                actions: this.answers.actionsFile_name,
                component: capitalizeFirstLetter(this.answers.component_name)
            }
        );
        this.fs.copyTpl(
            this.templatePath('Component.tsx'),
            this.destinationPath('.\\' + capitalizeFirstLetter(this.answers.component_name) + '.tsx'),
            {
                property: this.answers.property_name,
                dispatch: this.answers.dispatch_name,
                state: this.answers.state_name,
                component: capitalizeFirstLetter(this.answers.component_name)
            }
        );
        this.fs.copyTpl(
            this.templatePath('IComponent.ts'),
            this.destinationPath('.\\' + 'I' + capitalizeFirstLetter(this.answers.component_name) + '.ts'),
            {
                property: this.answers.property_name,
                dispatch: this.answers.dispatch_name,
                state: this.answers.state_name,
                component: capitalizeFirstLetter(this.answers.component_name)
            }
        );
        this.fs.copyTpl(
            this.templatePath('Component.module.scss'),
            this.destinationPath('.\\' + capitalizeFirstLetter(this.answers.component_name) + '.module.scss')
        );
    }

};