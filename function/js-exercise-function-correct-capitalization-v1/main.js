// TODO: answer here
/**
 * Koreksi huruf besar
 * @param {string} text
 * @returns {string} convert huruf kapital diawal kalimat dan setelah titik
 */

function correctCapitalization(text) {
    let result = ""

    // melakukan perulangan terhadap teks
    for (let i = 0; i < text.length; i++) {
        if (i === 0) {
            result += text[i].toLocaleUpperCase()
        }else if (text[i-2] === ".") {
            result += text[i].toLocaleUpperCase()
        } else {
            result += text[i]
        }
    }

    return result
}

console.log(correctCapitalization("ruangguru adalah sebuah perusahaan rintisan digital asal Indonesia yang bergerak di bidang pendidikan nonformal. ruangguru menawarkan platform pembelajaran berbasis kurikulum sekolah melalui video tutorial interaktif oleh guru dan animasi di aplikasi ponsel dan komputer. perusahaan ini didirikan oleh Belva Devara dan Iman Usman pada April 2014. pada tahun 2021 Ruangguru dinobatkan menjadi perusahaan paling inovatif peringkat 25 di dunia dan peringkat 2 dalam kategori pendidikan oleh Fast Company."))
console.log("============")
console.log(correctCapitalization("neurons (also called neurones or nerve cells) are the fundamental units of the brain and nervous system, the cells responsible for receiving sensory input from the external world, for sending motor commands to our muscles, and for transforming and relaying the electrical signals at every step in between. more than that, their interactions define who we are as people. having said that, our roughly 100 billion neurons do interact closely with other cell types, broadly classified as glia (these may actually outnumber neurons, although it is not really known)."))
console.log("============")
console.log(correctCapitalization("dendrites are appendages that are designed to receive communications from other cells. they resemble a tree-like structure, forming projections that become stimulated by other neurons and conduct the electrochemical charge to the cell body (or, more rarely, directly to the axons). the surface of the dendrites is filled with receptors that become enacted upon by neurotransmitters that traversed the synapse after the pre-synaptic neuron fired and released neurotransmitters into the synapse. dendrites integrate this stimulation (from a multitude of receptors) and play a crucial role in determining the extent to which the received stimulation will result in an action potential. although dendrites have traditionally been regarded as receivers of the neurotransmission, recent research has found that dendrites can also release neurotransmitters into the synapse. this new data adds to our understanding of the incredible complexity of neuronal transmission."))

module.exports = correctCapitalization