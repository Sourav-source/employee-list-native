import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';

const ViewEmployee = ({route, navigation}) => {
  const {employee} = route.params;
  console.log(employee);

  const cardStyle = [
    styles.cardContainer,
    {backgroundColor: employee?.backgroundColor},
  ];

  console.log(employee.subordinates.length);

  return (
    <View style={cardStyle}>
      <View style={styles.overlay} />
      <View style={styles.cardContent}>
        <Text style={{color: '#fff', fontSize: 22, fontWeight: 600}}>
          Name: {employee?.name}
        </Text>
        <Text style={{color: '#fff', fontSize: 22, fontWeight: 600}}>
          Email: {employee?.email}
        </Text>
        <Text style={{color: '#fff', fontSize: 22, fontWeight: 600}}>
          Phone: {employee?.phone}
        </Text>
        <Text style={{color: '#fff', fontSize: 22, fontWeight: 600}}>
          Address: {employee?.address}
        </Text>
        {employee?.managerName && (
          <Text style={{color: '#fff', fontSize: 22, fontWeight: 600}}>
            Reporting Manager: {employee?.managerName}
          </Text>
        )}
        {employee?.subordinates && employee.subordinates.length !== 0 && (
          <Text
            style={{
              color: '#fff',
              fontSize: 22,
              fontWeight: 600,
              marginTop: 10,
            }}>
            Subordinates:
          </Text>
        )}
        {employee?.subordinates &&
          employee.subordinates.length !== 0 &&
          employee?.subordinates.map(sub => {
            return (
              <Text
                key={sub?.id}
                style={{
                  color: '#fff',
                  fontSize: 18,
                  fontWeight: 500,
                }}>
                Name: {sub?.name}
              </Text>
            );
          })}
      </View>
      <Button
        title="Go to Employee List"
        onPress={() => navigation.navigate('EmployeeList')}
        color="rgba(229,51,14,0.7)"
      />
    </View>
  );
};

export default ViewEmployee;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    marginVertical: 20,
    marginHorizontal: 8,
    padding: 16,
    elevation: 4,
    top: '25%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 8,
  },
  cardContent: {
    flexDirection: 'column',
    position: 'relative',
    marginBottom: 20,
  },
});
