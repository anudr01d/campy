import React, { useState, useEffect } from 'react';
import {ScrollView, SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import {userLoggedOut} from '../../Redux/Actions/userAction';
import CustomHeader from '../../Components/customHeader';
import {string} from '../../Config/string';
import DropDownPicker from 'react-native-dropdown-picker';
import {styles} from './styles';
import Card from '../../Components/Card';

const AnalyticsScreen = ({navigation}) => {

  const [mandalOpen, setMandalOpen] = useState(false);
  const [villageOpen, setVillageOpen] = useState(false);
  const [boothOpen, setBoothOpen] = useState(false);

  const [mandalValue, setMandalValue] = useState(null);
  const [villageValue, setVillageValue] = useState(null);
  const [boothValue, setBoothValue] = useState(null);

  const [mandalItems, setMandalItems] = useState([
    {label: 'Sarangapur', value: 'Sarangapur'},
    {label: 'Mamda', value: 'Mamda'},
    {label: 'Laxmanchanda', value: 'Laxmanchanda'}
  ]);

  const [villageItems, setVillageItems] = useState([
    {label: 'Potia', value: 'Potia'},
    {label: 'Thandra', value: 'Thandra'},
    {label: 'Borigoan W', value: 'Borigoan W'},
  ]);

  const [boothItems, setBoothItems] = useState([
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'}
  ]);

  return (
    <>
      <CustomHeader screenName="Analytics" navigation={navigation} /> 
      <ScrollView>
          <View style={{padding: 10}}>
                <DropDownPicker
                  listItemContainer={{
                    height: 40
                  }}
                  textStyle={{
                    fontSize: 18
                  }}
                  open={mandalOpen}
                  value={mandalValue}
                  items={mandalItems}
                  setOpen={setMandalOpen}
                  setValue={setMandalValue}
                  setItems={setMandalItems}
                  listMode="MODAL" 
                  mode="SIMPLE"
                  placeholder="Mandal"
                />
          </View>
          <View style={{padding: 10}}>
                <DropDownPicker
                  listItemContainer={{
                    height: 40
                  }}
                  textStyle={{
                    fontSize: 18
                  }}
                  open={villageOpen}
                  value={villageValue}
                  items={villageItems}
                  setOpen={setVillageOpen}
                  setValue={setVillageValue}
                  setItems={setVillageItems}
                  listMode="MODAL" 
                  mode="SIMPLE"
                  placeholder="Village"
                />
          </View>
          <View style={{padding: 10}}>
                <DropDownPicker
                  listItemContainer={{
                    height: 40
                  }}
                  textStyle={{
                    fontSize: 18
                  }}
                  open={boothOpen}
                  value={boothValue}
                  items={boothItems}
                  setOpen={setBoothOpen}
                  setValue={setBoothValue}
                  setItems={setBoothItems}
                  listMode="MODAL"
                  mode="SIMPLE"
                  placeholder="Booth"
                />
          </View>
            <Card style={styles.card} style={{height:120}}>
              <Text style={styles.sectionTitle}>No of People</Text>
              <View style={{marginTop: 10}}>
                <Text style={{color: "#f57c00", fontSize: 24}}>15000</Text>
              </View>
            </Card>
            <Card style={styles.card}>
              <Text style={styles.sectionTitle}>Religion</Text>
              <View style={{marginTop: 10}}>
                <View style={{marginTop: 10}} style={styles.row}>
                  <Text style ={styles.cardText}>Hindu</Text>
                  <Text style={{color: "#016BE5", fontSize: 22}}>: 3456000</Text>
                </View>
                <View style={{marginTop: 10}} style={styles.row}>
                  <Text style ={styles.cardText}>Muslim</Text>
                  <Text style={{color: "#016BE5", fontSize: 22}}>: 125000</Text>
                </View>
                <View style={{marginTop: 10}} style={styles.row}>
                  <Text style ={styles.cardText}>Others : </Text>
                  <Text style={{color: "#016BE5", fontSize: 22}}>: 14000</Text>
                </View>
              </View>
            </Card>
            <Card style={styles.card} style={{height:260}}>
              <Text style={styles.sectionTitle}>Age</Text>
              <SafeAreaView style={{marginTop: 10}}>
                <View style={{marginTop: 10}} style={styles.row}>
                  <Text style ={styles.cardText}>Under 15</Text>
                  <Text style={{color: "#016BE5", fontSize: 22}}>: 14000</Text>
                </View>
                <View style={{marginTop: 10}} style={styles.row}>
                  <Text style ={styles.cardText}>15-29</Text>
                  <Text style={{color: "#016BE5", fontSize: 22}}>: 4000</Text>
                </View>
                <View style={{marginTop: 10}} style={styles.row}>
                  <Text style ={styles.cardText}>30-44</Text>
                  <Text style={{color: "#016BE5", fontSize: 22}}>: 5000</Text>
                </View>
                <View style={{marginTop: 10}} style={styles.row}>
                  <Text style ={styles.cardText}>45-59</Text>
                  <Text style={{color: "#016BE5", fontSize: 22}}>: 6000</Text>
                </View>
                <View style={{marginTop: 10}} style={styles.row}>
                  <Text style ={styles.cardText}>60+</Text>
                  <Text style={{color: "#016BE5", fontSize: 22}}>: 6000</Text>
                </View>
              </SafeAreaView>
            </Card>
            <Card style={styles.card} style={{height:150}}>
              <Text style={styles.sectionTitle}>Gender</Text>
              <View style={{marginTop: 10}}>
                <View style={{marginTop: 10}} style={styles.row}>
                  <Text style ={styles.cardText}>Male</Text>
                  <Text style={{color: "#016BE5", fontSize: 22}}>: 6000</Text>
                </View>
                <View style={{marginTop: 10}} style={styles.row}>
                  <Text style ={styles.cardText}>Female</Text>
                  <Text style={{color: "#016BE5", fontSize: 22}}>: 6000</Text>
                </View>
              </View>
            </Card>
            <Card style={styles.card}>
              <Text style={styles.sectionTitle}>Schemes</Text>
              <Text style={{color: "#43a047", fontSize: 22, marginTop: 10}}>
                Kanti Velugu
              </Text>
              <Text style={{color: "#43a047", fontSize: 22}}>
                Rythu Bandhu
              </Text>
              <Text style={{color: "#43a047", fontSize: 22}}>
                Amma Odi & KCR Kit
              </Text>
            </Card>

      </ScrollView>
    </>
  );
};

export default AnalyticsScreen;
