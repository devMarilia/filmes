import React, { Component } from 'react';
import { View, Text , TouchableOpacity, Image, StyleSheet} from 'react-native';

class Filmes extends Component {
    render() {
        const {nome, foto} = this.props.data
        return (
            <View>
                <View style={styles.card}> 
                    <Text style={styles.titulo}>{nome}</Text>
                    <Image
                    style={styles.capa}
                    source={{uri: foto}}
                    />

                    <View style={styles.AreaBotao}>
                        <TouchableOpacity style={styles.botao} onPress={ () =>  alert(nome)}>
                            <Text style={styles.botaoTexto}>LEIA MAIS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        shadowColor: '#000',
        backgroundColor: '#FFF',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        margin: 15,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 1
    },
    titulo: {
        fontSize: 18,
        padding: 15
    }, 
    capa: {
        height: 250
    },
    AreaBotao: {
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 9
    },
    botao: {
        width: 100,
        opacity: 1,
        padding: 8,
        backgroundColor: '#09A6FF',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    botaoTexto: {
        textAlign: 'center',
        color: '#FFF'
    }
})

export default Filmes 