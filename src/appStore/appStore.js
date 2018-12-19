import { BehaviorSubject} from 'rxjs';

const defaultState = {
    myContainer: []
};

const subject = new BehaviorSubject(defaultState);

class AppStore {


    // setState(st) {
    //     const val = subject.value;

    //     subject.next(st)
    // }

    getSubject() {
        return subject;
      }

      updateValue(payload) {
        subject.next(payload)
      }


}

export default new AppStore();