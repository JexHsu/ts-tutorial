type StringOrNum = string | number;
type ObjWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log('${iterm} ahs a uid of ${uid}');
};

const greet = (user: ObjWithName) => {
  console.log('${user.name} says hello');
};

const greetAgain = (user: ObjWithName) => {
  console.log('${user.name} says hello');
};
