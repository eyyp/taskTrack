import { ScrollView, View,StyleSheet,TouchableOpacity,Text,Image,Modal,TextInput} from "react-native";
import { useEffect, useState} from "react";
import { setTask, getTasks, taskCheck, taskDelete,resetData} from "./src/store";
import DateTable from "./src/component/calender";
const Welcome = () =>{
  const [tasks,setTasks] = useState([]);
  const [modalVisible,setModalVisible] = useState(false);
  const [todayVisible,setTodayVisible] = useState(false);
  const [date,setDate] = useState('');
  const [dateVisible,setDateVisible] = useState(true);
  const [task_title,setTaskTitle] = useState('');
  useEffect(()=>{
    //resetData();
    setTask("deneme Title","false","Deneme Açıklama","true");
    getTasks((data)=>{
      setTasks(data)
    })
  },[])

  const send = () => {
    if(task_title != ''){

    }
  }

  const check = (task,value) =>{
    if(value == "true"){
      taskCheck(task,"false")
      getTasks((data)=>{
        setTasks(data)
      })
    } 
    else{
      taskCheck(task,"true")
      getTasks((data)=>{
        setTasks(data)
      })
    }
  } 

  const deleteTask =(item) =>{
    taskDelete(item)
    getTasks((data)=>{
      setTasks(data)
    })
  }

  const sendDate = () =>{
    setDateVisible(true);
    console.log(date)
  } 

    return(
      <View style={styles.Body}>
        <View style={styles.Container}>
        <Text style={styles.title}>TaskTrackr</Text>
          <TouchableOpacity style={styles.barRow}>
            <View style={styles.barContainer}>
              <Text style={styles.taskText}>Görevler</Text>
              <Image
                style={{marginRight:15}} 
                source={require('./src/Assets/icon/right-arrow.png')}
              />
            </View>
            <View style={styles.line}></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.barRow}>
            <View style={styles.barContainer}>
              <View style={styles.row}>
                <Image 
                  style={{marginRight:15}}
                  source={require('./src/Assets/icon/star.png')}
                />
                <Text style={styles.barText}>Tekrarlı</Text>
              </View>
              <Image 
                style={{marginRight:15}}
                source={require('./src/Assets/icon/right-arrow.png')}
              />
            </View>
            <View style={styles.line}></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.barRow}>
            <View style={styles.barContainer}>
              <View style={styles.row}>
                <Image 
                  style={{marginRight:15}}
                  source={require('./src/Assets/icon/today.png')}
                />
                <Text style={styles.barText}>Planlanmış</Text>
              </View>
              <Image 
                style={{marginRight:15}}
                source={require('./src/Assets/icon/right-arrow.png')}
              />
            </View>
            <View style={styles.line}></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.barRow} onPress={()=>setTodayVisible(!todayVisible)}>
            <View style={styles.barContainer}>
              <View style={styles.row}>
                <Image 
                  style={{marginRight:15}}
                  source={require('./src/Assets/icon/home.png')}
                />
                <Text style={styles.barText}>Bugün</Text>
              </View>
              { todayVisible ? 
                <Image 
                 style={{marginRight:15}}
                 source={require('./src/Assets/icon/bottom-arrow.png')}
                />
                : 
                <Image 
                  style={{marginRight:15}}
                  source={require('./src/Assets/icon/right-arrow.png')}
               />
              }
            </View>
            {!todayVisible && <View style={styles.line}></View>}
          </TouchableOpacity>
          {todayVisible && 
              <ScrollView style={{height:180,marginLeft:40}}>
                {tasks.map((item,index) =>
                  <TouchableOpacity key={index} style={styles.taskButton} onPress={()=>check(item,item.task_check)}>
                  { item.task_check == "true" ?
                    <Image
                        source={require('./src/Assets/icon/check-oval.png')}
                    />
                    :
                    <Image
                        source={require('./src/Assets/icon/oval.png')}
                    />
                  }
                    <Text style={styles.taskButtonText}>{item.task_title}</Text>
                    <TouchableOpacity onPress={()=>deleteTask(item)}>
                      <Image 
                        source={require('./src/Assets/icon/close.png')}
                      />
                    </TouchableOpacity>
                  </TouchableOpacity>
                )}
              </ScrollView>}
        </View>
        <TouchableOpacity style={styles.addTaskButton} onPress={()=>setModalVisible(true)}>
          <Image
            style={styles.addButtonImage}
            source={require('./src/Assets/icon/plus-black.png')}
          />
        </TouchableOpacity>
        <View style={[styles.bottomBar,{marginTop:todayVisible ? 100:280}]}>
            <Text style={{marginLeft:200,marginTop:27,fontSize:16,color:'#0C0C0C',lineHeight:25}}>4 Görev Mevcut</Text>
            <Image 
              style={{marginTop:24,marginLeft:20}}
              source={require('./src/Assets/icon/blue-oval.png')}
            />
        </View>
        <Modal visible={modalVisible} animationType="slide">
            <View style={{flex:1,backgroundColor:'#191919'}}>
              { dateVisible ? 
                <View>
                  <TouchableOpacity style={{marginTop:300,marginLeft:10,width:35,height:35,borderRadius:999,backgroundColor:'#5E5E5E',alignItems:'center',justifyContent:'center'}} onPress={()=>setModalVisible(false)}>
                    <Image 
                      source={require('./src/Assets/icon/modal-close.png')}
                    />
                  </TouchableOpacity> 
                  <View style={{backgroundColor:'#0C0C0C',width:390,height:440,borderRadius:5,marginTop:10}}>
                      <View style={{width:35,height:5,backgroundColor:'#BCBCBC80',borderRadius:999,alignSelf:'center',marginTop:5}}></View>
                      <TextInput 
                        style={{width:330,height:50,marginTop:25,paddingLeft:15,fontSize:25}}
                        placeholder="Görev Ekle" placeholderTextColor={'white'}
                        onChange={(text) => setTaskTitle(text)}
                        onSubmitEditing={()=>send()}
                        clearButtonMode="while-editing"
                      />
                      <TouchableOpacity style={{width:120,height:35,borderRadius:5,backgroundColor:'#5E5E5E',marginLeft:17,paddingLeft:8,paddingTop:6,flexDirection:'row'}} onPress={()=>setDateVisible(false)}>
                          <Image 
                            source={require('./src/Assets/icon/today-white.png')}
                          />
                          <Text style={{color:'#FFFFFF',fontSize:16,lineHeight:25,marginLeft:5}}>Planla</Text>
                      </TouchableOpacity>
                  </View>
                </View>
                : <View>
                    <DateTable Press={(day)=>setDate(day)}/>
                    <TouchableOpacity style={{width:200,height:50,backgroundColor:'white',borderRadius:5,marginTop:20,marginLeft:20,alignItems:'center',justifyContent:'center'}} onPress={()=>sendDate()}>
                        <Text>Kaydet</Text>
                    </TouchableOpacity>
                  </View>
              }

            </View>
        </Modal>
      </View>
    )
}

const styles = StyleSheet.create({
  Body:{
    flex:1,
    backgroundColor:'#0C0C0C',
  },
  Container:{
    width:390,
    paddingTop:100,
    paddingHorizontal:20
  },
  title:{
    color:'#FFFFFF',
    fontSize:39,
    lineHeight:50,
    marginBottom:35,
  },
  barText:{
    color:'#FFFFFF',
    fontSize:16,
    marginTop:2
  },
  taskText:{
    color:'#FFFFFF',
    fontSize:16,
    marginTop:2,
    marginLeft:40
  },
  line:{
    width:295,
    height:1,
    backgroundColor:'#FFFFFF',
    marginTop:15,
    marginLeft:40
  },
  barRow:{
    minHeight:50,
    marginTop:5
  },
  barContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  row:{
    flexDirection:'row'
  },
  taskButton:{
    backgroundColor:'#333333',
    width:295,
    height:50,
    flexDirection:'row',
    justifyContent:'space-between',
    borderRadius:5,
    alignItems:'center',
    paddingLeft:10,
    paddingRight:5,
    marginBottom:10
  }, 
  taskButtonText:{
    color:'#FFFFFF',
    fontSize:14,
    marginRight:50
  },
  bottomBar:{
    backgroundColor:'#FFFFFF',
    width:390,
    height:89,
    flexDirection:'row'
  },
  addTaskButton:{
    borderColor:'#0C0C0C',
    borderWidth:5,
    borderRadius:999,
    backgroundColor:'#FFFFFF',
    width:60,
    height:60,
    position:'absolute',
    marginTop:650,
    zIndex:99,
    marginLeft:15,
    justifyContent:'center',
    alignItems:'center'
  },
  addButtonImage:{
    width:30,
    height:30
  },
  
})

export default Welcome;

