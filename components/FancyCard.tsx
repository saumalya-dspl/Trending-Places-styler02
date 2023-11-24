import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 

        source={{
          uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnAJEi2ZWB10xuC_GRYL1a6imjA5KVGFUmHR31xx3VWlO3KcOb2oGK6Kwt_B9dAhuzf84&usqp=CAU'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}> Howrah Bridge </Text>
            <Text style={styles.cardLabel}> City of Joy Kolkata </Text>
            <Text style={styles.cardDescription}> 
The Howrah Bridge is one of the oldest hanging bridges in the world with no pillars supporting its suspension over the Hooghly River. It is the sixth longest bridge of its type in the world. </Text>  
            <Text style={styles.cardFooter}> Come Visit </Text>


        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight:'bold',
    paddingHorizontal:10,
  },
  card:{
    width:350,
    height:360,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal:16,
  },
  cardElevated:{
    backgroundColor:'#FFFFFF',
    elevation:3,
    shadowOffset:{
      width:1,
      height:1,
    }
  },
  cardImage:{
    height:180,
    marginBottom:8,
    borderTopLeftRadius:6,
    borderTopRightRadius:6,
  },
  cardBody:{
    flex:1,
    flexGrow:1,
    paddingHorizontal:12,
  },
  cardTitle:{
    color:'#000000'
  },
  cardLabel:{
    color:'#000000'
  },
  cardDescription:{
    color:'#000000'
  },
  
  cardFooter:{
    color:'#000000'
  },

});
