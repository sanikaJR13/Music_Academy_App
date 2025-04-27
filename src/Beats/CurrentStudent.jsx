// import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import { useRoute } from '@react-navigation/native';

// const CurrentStudent = () => {
//   const [students, setStudents] = useState([]);
//   const [expandedId, setExpandedId] = useState(null);
//   const route = useRoute();

//   useEffect(() => {
//     if (route.params?.newStudent) {
//       setStudents((prevStudents) => [...prevStudents, route.params.newStudent]);
//     }
//   }, [route.params?.newStudent]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Current Students</Text>
//       <FlatList
//         data={students}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <TouchableOpacity onPress={() => setExpandedId(expandedId === item.id ? null : item.id)}>
//               <Text style={styles.name}>{item.name}</Text>
//             </TouchableOpacity>
//             {expandedId === item.id && (
//               <>
//                 <Text style={styles.details}>Birthday: {item.birthday}</Text>
//                 <Text style={styles.details}>Email: {item.mail}</Text>
//                 <Text style={styles.details}>Contact: {item.contact}</Text>
//                 <Text style={styles.details}>Address: {item.address}</Text>
//                 <Text style={styles.details}>Parent's Name: {item.parentsName}</Text>
//                 <Text style={styles.details}>Parent's Contact: {item.parentsContact}</Text>
//                 <Text style={styles.details}>Parent's Email: {item.parentEmail}</Text>
//                 <Text style={styles.details}>Played Guitar Before? {item.guitarExperience}</Text>
//                 <Text style={styles.details}>Level: {item.level}</Text>
//                 <Text style={styles.details}>Mode of Learning: {item.mode}</Text>
//                 <Text style={styles.details}>Batch Time: {item.batchTime}</Text>
//                 <Text style={styles.details}>Joining Date: {item.joiningDate}</Text>
//                 <Text style={styles.details}>Payment Mode: {item.paymentMode}</Text>
//               </>
//             )}
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default CurrentStudent;

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   header: { fontSize: 22, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
//   card: { backgroundColor: '#1E3A8A', padding: 15, borderRadius: 10, marginBottom: 10 },
//   name: { fontSize: 18, fontWeight: 'bold', color: '#FACC15' },
//   details: { fontSize: 16, color: '#E5E7EB' }
// });

import { FlatList, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const students = [
  {
    id: '1', name: 'John Doe', birthday: '2003-05-15', mail: 'john@example.com',
    contact: '9876543210', address: '123 Main St, NY', parentsName: 'Michael Doe',
    parentsContact: '9123456789', parentEmail: 'michael.doe@example.com',
    guitarExperience: 'Yes', level: 'Intermediate', mode: 'Online', batchTime: '5-6 PM',
    joiningDate: '2025-03-10', paymentMode: 'Credit Card'
  },
  {
    id: '2', name: 'Jane Smith', birthday: '2001-08-25', mail: 'jane@example.com',
    contact: '9988776655', address: '456 Elm St, CA', parentsName: 'Linda Smith',
    parentsContact: '9765432101', parentEmail: 'linda.smith@example.com',
    guitarExperience: 'No', level: 'Beginner', mode: 'Offline', batchTime: '6-7 PM',
    joiningDate: '2025-03-15', paymentMode: 'UPI'
  },
  {
    id: '3', name: 'John Doe', birthday: '2003-05-15', mail: 'john@example.com',
    contact: '9876543210', address: '123 Main St, NY', parentsName: 'Michael Doe',
    parentsContact: '9123456789', parentEmail: 'michael.doe@example.com',
    guitarExperience: 'Yes', level: 'Intermediate', mode: 'Online', batchTime: '5-6 PM',
    joiningDate: '2025-03-10', paymentMode: 'Credit Card'
  },
  {
    id: '4', name: 'Jane Smith', birthday: '2001-08-25', mail: 'jane@example.com',
    contact: '9988776655', address: '456 Elm St, CA', parentsName: 'Linda Smith',
    parentsContact: '9765432101', parentEmail: 'linda.smith@example.com',
    guitarExperience: 'No', level: 'Beginner', mode: 'Offline', batchTime: '6-7 PM',
    joiningDate: '2025-03-15', paymentMode: 'UPI'
  },
  {
    id: '5', name: 'John Doe', birthday: '2003-05-15', mail: 'john@example.com',
    contact: '9876543210', address: '123 Main St, NY', parentsName: 'Michael Doe',
    parentsContact: '9123456789', parentEmail: 'michael.doe@example.com',
    guitarExperience: 'Yes', level: 'Intermediate', mode: 'Online', batchTime: '5-6 PM',
    joiningDate: '2025-03-10', paymentMode: 'Credit Card'
  },
  {
    id: '6', name: 'Jane Smith', birthday: '2001-08-25', mail: 'jane@example.com',
    contact: '9988776655', address: '456 Elm St, CA', parentsName: 'Linda Smith',
    parentsContact: '9765432101', parentEmail: 'linda.smith@example.com',
    guitarExperience: 'No', level: 'Beginner', mode: 'Offline', batchTime: '6-7 PM',
    joiningDate: '2025-03-15', paymentMode: 'UPI'
  }
];

const CurrentStudent = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Current Students</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity onPress={() => setExpandedId(expandedId === item.id ? null : item.id)}>
              <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
            {expandedId === item.id && (
              <>
                <Text style={styles.details}>Birthday: {item.birthday}</Text>
                <Text style={styles.details}>Email: {item.mail}</Text>
                <Text style={styles.details}>Contact: {item.contact}</Text>
                <Text style={styles.details}>Address: {item.address}</Text>
                <Text style={styles.details}>Parent's Name: {item.parentsName}</Text>
                <Text style={styles.details}>Parent's Contact: {item.parentsContact}</Text>
                <Text style={styles.details}>Parent's Email: {item.parentEmail}</Text>
                <Text style={styles.details}>Played Guitar Before? {item.guitarExperience}</Text>
                <Text style={styles.details}>Level: {item.level}</Text>
                <Text style={styles.details}>Mode of Learning: {item.mode}</Text>
                <Text style={styles.details}>Batch Time: {item.batchTime}</Text>
                <Text style={styles.details}>Joining Date: {item.joiningDate}</Text>
                <Text style={styles.details}>Payment Mode: {item.paymentMode}</Text>
               
              </>
            )}
          </View>
        )}
      />
    </View>
  );
};

export default CurrentStudent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    padding: 20
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#1E3A8A',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#FACC15',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FACC15'
  },
  details: {
    fontSize: 16,
    color: '#E5E7EB'
  }
});
