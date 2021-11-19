import firebase from "firebase";

const config = {
	apiKey: "AIzaSyBDvBvM9nQhMSGUFswN3a48eCUGWUWS1HE",
	authDomain: "cure-bionics.firebaseapp.com",
	projectId: "cure-bionics",
	storageBucket: "cure-bionics.appspot.com",
	messagingSenderId: "786881342651",
	appId: "1:786881342651:web:531da00c5573358d68cd9e",
	measurementId: "G-Y275J842K9",
};
if (!firebase.apps.length) {
	firebase.initializeApp(config);
} else {
	firebase.app(); // if already initialized, use that one
}
const storage_ = firebase.storage();

export async function uploadCloud(scan, folder, callback) {
	if (!scan & !scan.name) return alert("no File");
	let cloudFolder;
	let ref;
	if (folder === "SCAN") {
		cloudFolder = "3D_scan";
		ref = "SCAN";
	} else if (folder === "LIMB") {
		cloudFolder = "limb_photo";
		ref = "LIMB";
	} else if (folder === "PHOTO") {
		ref = "PHOTO";
		cloudFolder = "patient_photo";
	} else {
		ref = "REP";
		cloudFolder = "company_rep_images";
	}

	let extension = "." + scan.name.split(".")[1];
	let name = ref + Date.now() + extension;

	let uploadTask = storage_.ref(`${cloudFolder}/${name}`).put(scan);

	uploadTask.on(
		"state_changed",
		(snapshot) => {},
		(error) => {
			alert("Error");
			console.log(error);
		},
		() => {
			storage_
				.ref(cloudFolder)
				.child(name)
				.getDownloadURL()
				.then((url) => {
					callback(url);
				});
		}
	);
}
