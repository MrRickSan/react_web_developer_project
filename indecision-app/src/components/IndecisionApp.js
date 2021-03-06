import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    handleClearSelectedOption = () => {
        this.setState ( () => ({ selectedOption: undefined }));
    };

    handleDeleteOptions = () => {
        this.setState ( () => ({ options: [] }) );
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState ( (prevState) => ({
            /* Array.filter note: returns true and a new array with the matching item in the array. 
            If false, delete the item and return a new array without the item. */
            options: prevState.options.filter( (option) => optionToRemove !== option )
        }));
    };

    handlePick = () => {
        this.setState ( () => ({
            selectedOption: this.state.options[Math.floor(Math.random() * this.state.options.length)]
        }));
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter a valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState ( (prevState) => ({ 
            options: prevState.options.concat([option])
        }));
    };

    componentDidMount () {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if (options) {
                this.setState( () => ({ options }));
            }
        } catch (e) {
            //  Do nothing at all
        }
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('update');
            
        }
    }

    componentWillUnmount () {
        console.log('componentWillUnmount');
        
    }

    render () {
        const subtitle = 'Put your life in the hands of a computer.'
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />                 
                    </div>

                 </div>
                
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}