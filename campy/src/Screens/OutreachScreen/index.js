import React, { useState, useEffect } from 'react';
import {ScrollView, View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';

import {userLoggedOut} from '../../Redux/Actions/userAction';
import CustomHeader from '../../Components/customHeader';
import {string} from '../../Config/string';
import DropDownPicker from 'react-native-dropdown-picker';

import {styles} from './styles';

const OutreachScreen = ({navigation}) => {
  
  const [mandalOpen, setMandalOpen] = useState(false);
  const [villageOpen, setVillageOpen] = useState(false);

  const [mandalValue, setMandalValue] = useState(null);
  const [villageValue, setVillageValue] = useState(null);

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

  return (
    <>
      <CustomHeader screenName="Outreach" navigation={navigation} /> 
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
                    height: 40,
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
          <View style={{alignItems: 'flex-start'}}>
            <Text style={styles.text}>
              Message
            </Text>
            <TextInput 
              style={styles.input} 
              multiline
              editable
              maxLength={40}
              numberOfLines={10}
              placeholder="Type in your message or attach a link for survey here" />
          </View>

      </ScrollView>
    </>
  );
};

export default OutreachScreen;
