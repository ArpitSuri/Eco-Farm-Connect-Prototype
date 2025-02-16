import Waste from '../models/wasteModel.js';


const submitWaste = async (req, res) => {
  try {
    const wasteData = new Waste({
      ...req.body,
      cropImage: req.file ? `/uploads/${req.file.filename}` : "",
    });
    await wasteData.save();
    res.status(201).json({ message: "Waste submitted successfully" });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to submit waste" });
  }
};


 const getallwaste = async (req, res) => {
  try {
    const { search } = req.query;
    
    // Default to fetching all data if no search query is provided
    const query = search ? { title: { $regex: search, $options: "i" } } : {};
    
    const data = await Waste.find(query);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
}

export { submitWaste , getallwaste };