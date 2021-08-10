import React, { useState, useEffect } from 'react';
import { 
  ActivityIndicator, 
  TextInput, 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';

import {userLoggedOut} from '../../Redux/Actions/userAction';
import CustomHeader from '../../Components/customHeader';
import {string} from '../../Config/string';

import {styles} from './styles';
import firestore from '@react-native-firebase/firestore';

const VoterDataScreen = ({navigation}) => {

  const [hidden, setHidden] = useState(true);
  const [loading, setLoading] = useState(true); 
  const [voters, setVoters] = useState([]);
  const [epicNo, setEpicNo] = useState('');
  const [disabled, setDisabled] = useState(true)

   function onChangeText(text){ 
    if (text.length < 10){
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    setEpicNo(text);
  }


  const gotoAddEdit = () => {
    navigation.navigate('AddEditVoterScreen',voters);
  };

  const fetchVoterData = () => {
    firestore()
    .collection('Voters')
    .where('EpicNum', '==', epicNo)
    .get()
    .then(querySnapshot => {
      console.log('Total users: ', querySnapshot.size);

      querySnapshot.forEach(documentSnapshot => {
        const voters = [];
        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
        voters.push({
             ...documentSnapshot.data(),
             key: documentSnapshot.id,
           });
        setVoters(voters);
        setLoading(false);
        setHidden(false);
      });
    });

    // const subscriber = await firestore()
    //   .collection('VoterData')
    //   .where('EPIC_NO', '==', 'WCO0122747')
    //   .onSnapshot(querySnapshot => {
    //     const voters = [];
    //     querySnapshot.forEach(documentSnapshot => {
    //       voters.push({
    //         ...documentSnapshot.data(),
    //         key: documentSnapshot.id,
    //       });
    //     });
    //     console.log("VOTERDATA" + voters)
    //     setVoters(voters);
    //     setLoading(false);
    //     setHidden(false);
    //   });
    // return () => subscriber();
  };

  const resetPage = () => {
    setHidden(true);
  };

  //useEffect(() => {
    
  //}, []);

  //if (loading) {
  //  return <ActivityIndicator />;
  //}

  return (
    <>
      <CustomHeader screenName="Home" navigation={navigation} /> 
      <SafeAreaView style={styles.safearea}>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            maxLength={10}
            onChangeText = {text => onChangeText(text)}
            placeholder="Please enter 10 Digit EPIC NUMBER"
          />
          <TouchableOpacity disabled ={disabled} style={styles.gobutton} onPress = {() => fetchVoterData()}> 
            <Text>GO</Text>
          </TouchableOpacity>
        </View>
        { (!hidden)? 
        <ScrollView style={{visibility : 'hidden', height: 0}}>
          <View style={styles.details}>
              <Text style={styles.textBold}>FirstName : </Text>
              <Text style={styles.textNormal}>{voters[0].FirstName}</Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>LastName : </Text>
              <Text style={styles.textNormal}>{voters[0].LastName}</Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Booth No : </Text>
              <Text style={styles.textNormal}>{voters[0].BoothNum ? voters[0].BoothNum.toString() : "" }</Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>House No : </Text>
              <Text style={styles.textNormal}>{voters[0].HouseNum}</Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Relation First Name : </Text>
              <Text style={styles.textNormal}>{voters[0].RelationFirstName}</Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Relation Last Name : </Text>
              <Text style={styles.textNormal}>{voters[0].RelationLastName}</Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Relation Type : </Text>
              <Text style={styles.textNormal}>{voters[0].RelationType}</Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Religion : </Text>
              <Text style={styles.textNormal}>{voters[0].Religion}</Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Marital Status : </Text>
              <Text style={styles.textNormal}>{voters[0].Married}</Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Gender : </Text>
              <Text style={styles.textNormal}>{voters[0].Gender}</Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Age : </Text>
              <Text style={styles.textNormal}>{voters[0].Age}</Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Date of Birth : </Text>
              <Text style={styles.textNormal}>{voters[0].DOB}</Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Mobile No : </Text>
              <Text style={styles.textNormal}>{voters[0].Mobile}</Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Schemes : </Text>
              <View>
                {voters[0].Schemes ?  
                  voters[0].Schemes.map((scheme) => {
                    return (
                      <Text style={styles.textNormal}>{scheme}</Text>
                    )
                  })
                : <Text></Text>}
              </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => gotoAddEdit()}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonGray} onPress={() => resetPage()}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </ScrollView>
        : 
        <View style={{
          flex: 1, 
          alignItems: 'center',
          justifyContent: 'center'}}>
          <Text style={styles.textNormal}>Please enter the 10 digit EPIC Number.</Text>
        </View>
        }
      </SafeAreaView>
    </>
  );

  // return (
  //   <>
  //     <CustomHeader screenName="Home" navigation={navigation} /> 
  //     <View style={styles.container}>
  //       <Text style={styles.text}>Voter Data</Text>
        
  //       <TouchableOpacity style={styles.button} onPress={() => handleLogout()}>
  //         <Text style={styles.buttonText}>{string.logout.toUpperCase()}</Text>
  //       </TouchableOpacity>
  //     </View>
  //   </>
  // );
  {/* <FlatList
          data={voters}
          renderItem={({ item }) => (
            <View style= {styles.item}>
              <Text style={styles.text}>Voter Name: {item.voter_name}</Text>
              <Text>Voter Age: {item.voter_age}</Text>
            </View>
          )}
        /> */}
};

export default VoterDataScreen;
