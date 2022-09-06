import classes from './Type.module.css'

function Type(props) {
    console.log(props.type)

    switch (props.type) {
        case "normal": {
            return (
                <span className={`${classes.container} ${classes.normal} mx-1`}>{props.type}</span>
            )
        }
        case "grass": {
            return (
                <span className={`${classes.container} ${classes.grass} mx-1`}>{props.type}</span>
            )
        }
        case "poison": {
            return (
                <span className={`${classes.container} ${classes.poison} mx-1`}>{props.type}</span>
            )
        }
        case "fire": {
            return (
                <span className={`${classes.container} ${classes.fire} mx-1`}>{props.type}</span>
            )
        }
        case "psychic": {
            return (
                <span className={`${classes.container} ${classes.psychic} mx-1`}>{props.type}</span>
            )
        }
        case "ice": {
            return (
                <span className={`${classes.container} ${classes.ice} mx-1`}>{props.type}</span>
            )
        }
        case "flying": {
            return (
                <span className={`${classes.container} ${classes.flying} mx-1`}>{props.type}</span>
            )
        }
        case "dragon": {
            return (
                <span className={`${classes.container} ${classes.dragon} mx-1`}>{props.type}</span>
            )
        }
        case "fairy": {
            return (
                <span className={`${classes.container} ${classes.fairy} mx-1 `}>{props.type}</span>
            )
        }
        case "electric": {
            return (
                <span className={`${classes.container} ${classes.electric} mx-1`}>{props.type}</span>
            )
        }
        case "water": {
            return (
                <span className={`${classes.container} ${classes.water} mx-1`}>{props.type}</span>
            )
        }
        case "ground": {
            return (
                <span className={`${classes.container} ${classes.ground} mx-1`}>{props.type}</span>
            )
        }
        case "steel": {
            return (
                <span className={`${classes.container} ${classes.steel} mx-1`}>{props.type}</span>
            )
        }
        case "rock": {
            return (
                <span className={`${classes.container} ${classes.rock} mx-1 `}>{props.type}</span>
            )
        }
        case "bug": {
            return (
                <span className={`${classes.container} ${classes.bug} mx-1`}>{props.type}</span>
            )
        }
        case "fighting": {
            return (
                <span className={`${classes.container} ${classes.fighting} mx-1`}>{props.type}</span>
            )
        }
        case "dark": {
            return (
                <span className={`${classes.container} ${classes.dark} mx-1`}>{props.type}</span>
            )
        }
        case "ghost": {
            return (
                <span className={`${classes.container} ${classes.ghost} mx-1`}>{props.type}</span>
            )
        }
    }
    return (
        <span className={classes.container}>{props.type}</span>
    )
}

export default Type;

