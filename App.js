// Profile Card — practical task (React Native basics)
import { View, Text, Image, StyleSheet } from 'react-native';

// Data to display. Do not change it.
const BIO =
  'Building cross-platform apps with React Native. I love clean layouts, accessible design and sharing what I learn with the community.';

const STATS = [
  { label: 'Projects', value: '24' },
  { label: 'Followers', value: '1.2k' },
  { label: 'Following', value: '180' },
];

const SKILLS = ['React Native', 'JavaScript', 'UI Design', 'Git', 'Flexbox'];

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Image
          source={require('./assets/banner.png')}
          style={styles.banner}
          resizeMode="cover"
        />

        <View style={styles.body}>
          <Image source={require('./assets/avatar.png')} style={styles.avatar} />
          <Text style={styles.name}>Alex Rivera</Text>
          <Text style={styles.role}>Mobile Developer</Text>
          <Text style={styles.location}>Lisbon, Portugal</Text>
          <Text style={styles.bio} numberOfLines={3}>
            {BIO}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 64,
    paddingHorizontal: 20,
    backgroundColor: '#EEF1F6',
  },
  card: {
    backgroundColor: '#FFFFFF',
  },
  banner: {
    width: '100%',
    height: 120,
  },
  body: {
    padding: 20,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    marginTop: -48,
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 16,
  },
  location: {
    fontSize: 14,
    color: '#6B7280',
  },
  bio: {
    fontSize: 15,
    marginTop: 12,
  },
});
