const BinarySearchTree = require('./BinaryTree')

const ussEnterprise = new BinarySearchTree

ussEnterprise.insert(5, "Captain Picard")
ussEnterprise.insert(3, "Commander Riker")
ussEnterprise.insert(2, "Lt. Cmdr. Worf")
ussEnterprise.insert(4, "Lt. Comdr. LaForge")
ussEnterprise.insert(1, "Lieutenant security-officer")
ussEnterprise.insert(6, "Commander Data")
ussEnterprise.insert(8, "Lt. Cmdr. Crusher")
ussEnterprise.insert(5, "Lieutenant Selar")

console.log(ussEnterprise.bfs())