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
          <View style={styles.header}>
            <View style={styles.avatarWrapper}>
              <Image source={require('./assets/avatar.png')} style={styles.avatar} />
              <View style={styles.badge} />
            </View>
            <View style={styles.headerText}>
              <Text style={styles.name}>Alex Rivera</Text>
              <Text style={styles.role}>Mobile Developer</Text>
              <Text style={styles.location}>Lisbon, Portugal</Text>
            </View>
          </View>

          <Text style={styles.bio} numberOfLines={3}>
            {BIO}
          </Text>

          <View style={styles.statsRow}>
            {STATS.map((stat) => (
              <View key={stat.label} style={styles.stat}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>

          <View style={styles.tags}>
            {SKILLS.map((skill) => (
              <View key={skill} style={styles.tag}>
                <Text style={styles.tagText}>{skill}</Text>
              </View>
            ))}
          </View>

          <View style={styles.actions}>
            <View style={[styles.button, styles.buttonPrimary]}>
              <Text style={styles.buttonText}>Follow</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Message</Text>
            </View>
          </View>
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
  header: {
    flexDirection: 'row',
    marginTop: -48,
    marginBottom: 16,
  },
  avatarWrapper: {
    width: 96,
    height: 96,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  badge: {
    position: 'absolute',
    right: 4,
    bottom: 4,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#22C55E',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  headerText: {
    flex: 1,
    marginLeft: 14,
    // the texts start below the banner (avatar overlaps it by 48)
    marginTop: 52,
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
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E1E5EC',
    marginBottom: 16,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
  },
  tag: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#E8EFFE',
  },
  tagText: {
    fontSize: 13,
    color: '#2F6FED',
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#2F6FED',
  },
  buttonPrimary: {
    backgroundColor: '#2F6FED',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
