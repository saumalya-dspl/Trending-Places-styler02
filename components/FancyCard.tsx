import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

export default function FancyCard() {
  return (
    <ScrollView>
      <View id="1">
        <Text style={styles.headingText}>Trending Places</Text>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnAJEi2ZWB10xuC_GRYL1a6imjA5KVGFUmHR31xx3VWlO3KcOb2oGK6Kwt_B9dAhuzf84&usqp=CAU',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}> Howrah Bridge </Text>
            <Text style={styles.cardLabel}> City of Joy Kolkata </Text>
            <Text style={styles.cardDescription}>
              The Howrah Bridge is one of the oldest hanging bridges in the
              world with no pillars supporting its suspension over the Hooghly
              River. It is the sixth longest bridge of its type in the world.{' '}
            </Text>
            <Button
              mode="elevated"
              onPress={() => console.log('Pressed')}>
              Check in Map{' '}
            </Button>
          </View>
        </View>
      </View>

      <View id="2">
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: 'https://assets.telegraphindia.com/telegraph/05648444-7dc7-4c71-9a25-656e98a6a0a0.jpg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}> Victoria Memorial Hall </Text>
            <Text style={styles.cardLabel}> City of Joy Kolkata </Text>
            <Text style={styles.cardDescription}>
              Dedicated to Queen Victoria of England, it was constructed between
              1906. Today, the memorial has been turned into a museum that has
              25 galleries. It also houses paintings from the British Raj, along
              with memorabilia and manuscripts.
            </Text>
            <Button
              
              mode="elevated"
              onPress={() => console.log('Pressed')}>
              {' '}
              Check in Map{' '}
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 15,
    marginBottom: 4,
  },
  cardDescription: {
    color: '#2F363F',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },

  cardFooter: {
    color: '#000000',
  },
});
