import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import{ useFocusEffect } from '@react-navigation/native'
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';

import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';



function Favorites() {
  const [favorites, setFavorites] = useState([]);
  
  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachears = JSON.parse(response);

        setFavorites(favoritedTeachears);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView
        style={styles.techerList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
       {favorites.map((teacher: Teacher) => {
        return <TeacherItem 
            key={teacher.id}
            teacher={teacher}
            favorited={true}
          />
       })}
      </ScrollView>
    </View>
  );
}

export default Favorites;