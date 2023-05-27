import PurchasePackageInvoice from '../../../helper/Modal/Invoice/PurchasePackageInvoice'
import initDB from '../../../helper/initDB'

initDB()

export default async (req, res) => {
    
    const { id } = req.body;

    const findInvoiceData = await PurchasePackageInvoice.find({ PackageOwner: id })

    res.json(findInvoiceData)

}
