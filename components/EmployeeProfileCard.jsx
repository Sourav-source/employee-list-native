import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';

const EmployeeProfileCard = ({
  emp,
  getManagerName,
  getSubordinates,
  navigation,
}) => {
  const managerName = getManagerName(emp.parentId);
  const subordinates = getSubordinates(emp.id);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = [
    styles.cardContainer,
    {backgroundColor: emp?.backgroundColor},
    isHovered && styles.cardContainerHovered,
  ];

  return (
    <TouchableWithoutFeedback
      onPressIn={handleMouseEnter}
      onPressOut={handleMouseLeave}>
      <View style={cardStyle}>
        <View style={styles.overlay} />
        <View style={styles.cardContent}>
          <Text style={styles.nameText}>Name: {emp?.name}</Text>
          <Text style={styles.emailText}>Email: {emp?.email}</Text>
          <Text style={styles.phoneText}>Phone Number: {emp?.phone}</Text>
          {managerName && (
            <Text style={styles.managerText}>
              Manager's Name: {managerName}
            </Text>
          )}
        </View>
        <Button
          title="Go to Details"
          onPress={() =>
            navigation.navigate('ViewEmployee', {
              employee: {...emp, managerName, subordinates},
            })
          }
          color="rgba(229,51,14,0.7)"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    marginVertical: 20,
    marginHorizontal: 8,
    padding: 16,
    elevation: 4,
  },
  cardContainerHovered: {
    transform: [{scale: 1.05}],
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 8,
  },
  cardContent: {
    flexDirection: 'column',
    position: 'relative',
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff',
  },
  emailText: {
    fontSize: 16,
    marginBottom: 4,
    color: '#fff',
  },
  phoneText: {
    fontSize: 16,
    marginBottom: 4,
    color: '#fff',
  },
  managerText: {
    fontSize: 16,
    marginBottom: 4,
    fontStyle: 'italic',
    color: '#fff',
  },
});

export default EmployeeProfileCard;
