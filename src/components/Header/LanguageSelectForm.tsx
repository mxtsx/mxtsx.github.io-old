import {useDispatch, useSelector} from "react-redux";
import {getLanguage} from "../../redux/languageSelectors";
import {actions, LanguageType} from "../../redux/languageReducer";
import {createStyles, FormControl, InputLabel, makeStyles, Theme} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import cn from "classnames"
import {getLabelText} from "../../redux/headerSelectors";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            minWidth: 25,
            "& .MuiSelect-icon": {
                left: 31
            },
            "& .MuiSelect-select:focus": {
                backgroundColor: "rgba(255, 255, 255, 0)",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(0, 0, 0)",
                borderWidth: 1
            },
            "& .MuiFormLabel-root.Mui-focused": {
                color: "rgb(0, 0, 0)",
                transition: "200ms color"
            },
            "& .MuiPopover-paper": {
                backgroundColor: "lightgray",
                transition: "200ms background-color"
            },
            "& .MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.25)"
            }
        },
        formControlPaddingUkrRus: {
            "& .MuiSelect-outlined.MuiSelect-outlined": {
                paddingTop: 10,
                paddingRight: 25,
                paddingLeft: 10
            }
        },
        formControlPaddingEng: {
            "& .MuiSelect-outlined.MuiSelect-outlined": {
                paddingTop: 10,
                paddingRight: 22,
                paddingLeft: 8
            }
        },
        formControlPaddingCz: {
            "& .MuiSelect-outlined.MuiSelect-outlined": {
                paddingTop: 10,
                paddingRight: 32,
                paddingLeft: 11
            },
            "& .MuiSelect-icon": {
                left: 30
            }
        },
        formControlPaddingHr: {
            "& .MuiSelect-outlined.MuiSelect-outlined": {
                paddingTop: 10,
                paddingRight: 29,
                paddingLeft: 12
            },
            "& .MuiSelect-icon": {
                left: 29
            }
        },
        resize:{
            fontFamily: "Source Sans Pro",
            fontSize:16.5
        }
    })
)

const LanguageSelectForm: React.FC = React.memo(() => {
    const selectLabel = useSelector(getLabelText)
    const language = useSelector(getLanguage)
    const classes = useStyles(language);
    const dispatch = useDispatch()
    const onChangeHandler = (event: React.ChangeEvent<{value: unknown}>) => {
        dispatch(actions.languageChanged(event.target.value as LanguageType))
    }
    return (
        <FormControl variant="outlined" size={"small"} className={classes.formControl}>
            <InputLabel id="select-outlined-label" className={cn((classes.resize))}>{selectLabel[language]}</InputLabel>
            <Select
                labelId="select-outlined-label"
                id="select-outlined"
                value={language}
                onChange={onChangeHandler}
                label={selectLabel[language]}
                className={cn(classes.resize,
                    {[classes.formControlPaddingEng]: language === "eng"},
                    {[classes.formControlPaddingUkrRus]: language === "ukr" || "rus"},
                    {[classes.formControlPaddingCz]: language === "cz"},
                    {[classes.formControlPaddingHr]: language === "hr"})}
            >
                <MenuItem value={"eng"}>eng</MenuItem>
                <MenuItem value={"cz"}>cz</MenuItem>
                <MenuItem value={"ukr"}>ukr</MenuItem>
                <MenuItem value={"rus"}>rus</MenuItem>
                <MenuItem value={"hr"}>hr</MenuItem>
            </Select>
        </FormControl>
    )
})

export default LanguageSelectForm