import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const MAX_WIDTH = Dimensions.get('window').width*0.9;
const MAX_HEIGHT = Dimensions.get('window').height*0.7;

export default function CardRpg(){
    return (
        <View>
            <View style={styles.container}>
                <Image style={styles.image} source= {{ uri: "https://cdn.icon-icons.com/icons2/224/PNG/512/Iron_Sword_25714.png" }}/>
                <Text style={styles.titulo}>Espada</Text>
                <Text style={styles.atk}>Ataque: 20</Text>
                <Text style={styles.def}>Defesa: 5</Text>
                <Text style={styles.alc}>Alcance: 10</Text>
            </View>,
            <View style={styles.container}>
                <Image style={styles.image} source= {{ uri: "https://w7.pngwing.com/pngs/515/705/png-transparent-iron-shield-badge.png" }}/>
                <Text style={styles.titulo}>Escudo</Text>
                <Text style={styles.atk}>Ataque: 1</Text>
                <Text style={styles.def}>Defesa: 30</Text>
                <Text style={styles.alc}>Alcance: 5</Text>
            </View>,
            <View style={styles.container}>
                <Image style={styles.image} source= {{ uri: "https://e7.pngegg.com/pngimages/305/586/png-clipart-runescape-bow-and-arrow-wikia-runescape-classic-wiki-wood-bow-and-arrow.png" }}/>
                <Text style={styles.titulo}>arco</Text>
                <Text style={styles.atk}>Ataque: 15</Text>
                <Text style={styles.def}>Defesa: 1</Text>
                <Text style={styles.alc}>Alcance: 30</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        margin: 15,
        padding: 10,
        alignContent: 'center',
        justifyContent: 'center',
        width: MAX_WIDTH,
        height: MAX_HEIGHT
    },
    image:{
        height: '200px',
        width: '150px',
        resizeMode: 'cover',
        marginBottom: 10
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    atk: {
        marginBottom: 10,
        alignContent: 'flex-start'
    },
    def: {
        marginBottom: 10,
        alignContent: 'center'
    },
    alc: {
        marginBottom: 10,
        alignContent: 'flex-end'
    }
})