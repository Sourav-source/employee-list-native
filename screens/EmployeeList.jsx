import React, {useEffect, useState} from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import {getAllEmployees} from '../api/employeesApi';
import EmployeeProfileCard from '../components/EmployeeProfileCard';

const EmployeeList = ({navigation}) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees().then(data => {
      setEmployees(data);
    });
  }, []);

  function getManagerName(parentid) {
    const manager = employees.find(emp => emp.id === parentid);
    if (manager) {
      return manager.name;
    }
    return null;
  }
  function getSubordinates(employeeid) {
    const subordinates = employees.filter(emp => emp.parentId === employeeid);
    if (subordinates) {
      return subordinates;
    }
    return null;
  }

  return (
    <ScrollView>
      <Text style={styles.heading}>Emplyoyee List</Text>
      {employees.map(emp => (
        <EmployeeProfileCard
          getManagerName={getManagerName}
          getSubordinates={getSubordinates}
          emp={emp}
          navigation={navigation}
          key={emp?.id}
        />
      ))}
    </ScrollView>
  );
};

export default EmployeeList;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
  },
});
