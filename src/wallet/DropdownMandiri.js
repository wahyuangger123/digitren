import React, { useState } from "react";
import { Text, StyleSheet, View, Image,TouchableOpacity } from "react-native";
import imagePath from "../constants/imagePath";

export const DropdownMandiri = ({
    data = [],
    value = {},
    onSelect = () => { }
}) => {
    console.log("selected value", !!value)
    const [showOption, setShowOption] = useState(false)

    const onSelectedItem = (val) =>{
        setShowOption(false)
        onSelect(val)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.Dropdownstyle}
                activeOpacity={0.8}
                onPress={() => setShowOption(!showOption)}
            >
                <Text>{!!value ? value?.name : `VIRTUAL ACCOUNT BANK MANDIRI`}</Text>
                <Image style={{
                        transform: [{rotate: showOption ?'180deg':'0deg'}]
                }} source={imagePath.icDropDown} />
            </TouchableOpacity>
            {showOption && (<View style={{
                backgroundColor: 'rgba(0,0,0,0.2)',
                padding:8,
                height:80,
                width:380,
                flexDirection: 'row',
                alignItems: 'center',
                top:5,
                borderRadius:6,
            }}>
                {data.map((val, i) => {
                    return (
                        <TouchableOpacity
                        key={String(i)}
                        onPress={()=> onSelectedItem(val)}
                            style={{
                                backgroundColor: 'pink',
                                height:65,
                                width:360,
                                alignItems: 'center',
                                borderRadius:6,
                                
                            }}
                        >
                        <Text>{val.name}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>)}
        </View>
    );
};

const styles = StyleSheet.create({
    Dropdownstyle: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 8,
        borderRadius: 6,
        minHeight: 50,
        minWidth: 330,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}); 