import React from 'react'
import { Text, View, UIManager, LayoutAnimation, FlatList, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { connect } from "react-redux"
import * as actions from "../actions/index"

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

const LibraryList = (props) => {
    const current = props.selectedLibrary
    return (
        <FlatList
            style={{ backgroundColor: 'white' }}
            data={props.libraries}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
                return (
                    <TouchableWithoutFeedback
                        onPress={() => {
                            props.selectLibrary(item.id)
                            LayoutAnimation.configureNext(LayoutAnimation.create(100, 'easeInEaseOut', 'opacity'));
                        }}
                    >
                        <View>
                            <Text style={styles.textStyle}>{item.title}</Text>
                            {
                                current === item.id
                                    ? <Text style={styles.paraStyle}>{item.description}</Text>
                                    : null
                            }
                        </View>
                    </TouchableWithoutFeedback>
                )
            }}
        />
    )
}

const mapStateToProps = state => {
    return { libraries: state.libraries, selectedLibrary: state.selectedLibraryId }
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: "center",
        color: "black",
        fontSize: 18,
        margin: 10,
        fontFamily: "sans-serif",
        letterSpacing: 1
    },
    paraStyle: {
        color: "black",
        textAlign: "center",
        fontSize: 16,
        marginHorizontal: 20,
        fontFamily: "sans-serif",
        letterSpacing: 1
    }
})

export default connect(mapStateToProps, actions)(LibraryList)