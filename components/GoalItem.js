import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ item, id, onDeleteGoal}) => {
    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{ color: '#210644'}} 
                    onPress={onDeleteGoal.bind(this, id)}
                    style={({pressed}) =>  pressed && styles.pressItem}>
            <Text style={styles.goalText}> 
                {item}
            </Text>
            </Pressable>
        </View>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
      },
      pressItem: {
        opacity: 0.5,
      },
      goalText: {
        color: 'white',
        padding: 8,
      }
})