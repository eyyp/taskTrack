import AsyncStorage from "@react-native-async-storage/async-storage";
const setData = (key,value) =>{
  _storeData = async () => {
    try {
      await AsyncStorage.setItem(
        key,
        value,
      );
    } catch (error) {
      console.log(key,"set:",error)
    }
  };
  _storeData();
}

  _retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      }
    } catch (error) {
      console.log("get:",error)
    }
  }

  export const resetData = async () =>{
    _storeData = async (key) => {
      try {
        await AsyncStorage.removeItem(key);
      } catch (error) {
        console.log(key,"set:",error)
      }
    };
    var control = true;
    var key;
    for(var i = 1; control; i++){
      key = "task" + i;
      var temp = await AsyncStorage.getItem(key);
      if(temp != null){
        console.log(key)
        await AsyncStorage.setItem(
          key,
          null,
        );
      }
      else{
        control = false;
      }
    }
  }

  export const taskCheck = async (task,value) => {
    const key = "task" + task.task_id;
    task.task_check = value;
    const data = JSON.stringify(task);
    setData(key,data);
  }
  export const taskDelete = async (task) => {
    console.log(task)
    const key = "task" + task.task_id;
    await AsyncStorage.removeItem(key);
  }

export const setTask = async (task_title,task_check,task_description,task_repetetive) => {
    // Şu anki tarihi almak için
    const currentDate = new Date();

    // Tarihi okunabilir bir formatta göstermek için
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('tr-TR', options);

    // Şu anki saati almak için
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentSecond = currentDate.getSeconds();

    // Saati okunabilir bir formatta göstermek için
    const formattedTime = currentHour + ':' + currentMinute + ':' + currentSecond;
    var control = true;
    var length;
    for(var i=1;control;i++){
      const key = "task"+i;
      const task = await AsyncStorage.getItem(key);
      if(task == null){
        control = false;
        length = i;
      }
    }
    const key = "task" + String(length);
    let id = length;
    const data = {
      task_id:String(id),
      task_title:task_title,
      task_date:String(formattedDate),
      task_time:formattedTime,
      task_check:task_check,
      task_description:task_description,
      task_repetetive:task_repetetive,
    }
    const stringData = JSON.stringify(data);
    setData(key,stringData);
}

export const getTasks = async (callback) => {
  var data = new Array();
  var control = true;
  var key;
  for(var i = 1; control; i++){
    key = "task" + i;
    var temp = await AsyncStorage.getItem(key);
    if(temp != null){
      temp = JSON.parse(temp);
      data = [...data,temp];
    }
    else{
      control = false;
    }
  }
  if(data !== null){
    callback(data);
  }
}