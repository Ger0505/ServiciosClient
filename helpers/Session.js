import AsyncStorage from '@react-native-async-storage/async-storage'

class Session{
    async getSession(){
      const jsonValue = await AsyncStorage.getItem('@usuario')
      return jsonValue != null ? JSON.parse(jsonValue) : false
    }

    async getToken(){
      const jsonValue = await AsyncStorage.getItem('@token')
      return jsonValue != null ? JSON.parse(jsonValue) : false
    }
}

export default new Session()