import electron from 'electron'
const BrowserWindow = electron.remote.BrowserWindow
// 已经打开的对话窗口
let UserDialogueList = [] // {uid:'' ,DialogueWindow:{}}
const defaultURL = 'http://localhost:9080'
const DiaRouter = '/diawin'

function openUserDialogue (uid) {
  //  mark
  let mark = false
  //  找寻是否已经打开
  for (let i = 0; i < UserDialogueList.length; i++) {
    if (UserDialogueList[i].uid === uid) {
      mark = true
      break
    }
  }
  if (mark) {
    //  已经打开显示
    console.log('窗口已经打开')
  } else {
  //  未打开新建窗口
    let DialogueWindow = new BrowserWindow({width: 610, height: 510})
    let url = `${defaultURL}/#${DiaRouter}/${uid}`
    console.log('url', url)
    DialogueWindow.loadURL(url)
    UserDialogueList.push({uid, DialogueWindow})
  }
}
export default{openUserDialogue}
