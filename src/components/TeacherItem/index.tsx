import React from 'react';
import { View, Image, Text } from 'react-native';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQE0U0d97JSnzQ/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=ybtx3eM9JjcDwbQCAL5cyeY9n8T6Y-GxciLd1hBrngM' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Leandro Facim</Text>
                    <Text style={styles.subject}>Matemática</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                melhor do mundo no que faz, profissional dedicado e responsavél
                melhor do mundo no que faz, profissional dedicado e responsavél
                melhor do mundo no que faz, profissional dedicado e responsavél
                melhor do mundo no que faz, profissional dedicado e responsavél
                {'\n'}{'\n'}
                sempre buscando as melhores tecnologias do mercado
            </Text>
 
            <View style={styles.footer} >
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unFavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;