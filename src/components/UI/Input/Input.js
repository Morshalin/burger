import React from 'react';
import classes from './Input.css';

const  Input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
                {...props.elementConfig} 
                value={props.value} 
                className={inputClasses.join(' ')}
                onChange={props.changed}
            />
            break;
        case ('textarea'):
            inputElement = <textarea 
                {...props.elementConfig}
                value={props.value}
                className={inputClasses.join(' ')}
                onChange={props.changed}
            />
            break;
        default:
            inputElement = <input 
                {...props.elementConfig}
                value={props.value}
                className={inputClasses.join(' ')}
                onChange={props.changed}
            />
            break;
    }

    return (
        <div>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default  Input;
