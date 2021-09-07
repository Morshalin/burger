import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems';


const NavigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/order/">Order</NavigationItem>
        </ul>
    )
}

export default NavigationItems;