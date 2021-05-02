import AsyncStorage from '@react-native-async-storage/async-storage'

class Session{
    async getSession(){
        const jsonValue = await AsyncStorage.getItem('@usuario')
        if (jsonValue != null) {
          let user = JSON.parse(jsonValue)
          return user
        }
        return false
    }
}

export default new Session()