import {AppState} from "../../reducers/index";
import {Store} from "redux";
import {ThreadActions, UserActions} from "../../actions";
import {User} from "../../interfaces/user";
import {uuid} from "../../util/uuid";
import {Thread} from "../../interfaces/thread";

const me: User = {
  id: uuid(),
  isClient: true,
  name: 'Me',
  avatarSrc: require('../../../assets/images/avatars/female-avatar-1.png')
};

let wait: User = {
  id: uuid(),
  name: 'Waiting Bot',
  avatarSrc: require('../../../assets/images/avatars/male-avatar-2.png')
};

let tWait: Thread = {
  id: 'tWait',
  name: wait.name,
  avatarSrc: wait.avatarSrc,
  messages: []
};

export default function ChatExampleData(store: Store<AppState>) {

  // set the current User
  store.dispatch(UserActions.setCurrentUser(me));

  // create a new thread
  store.dispatch(ThreadActions.addThread(tWait));

}
