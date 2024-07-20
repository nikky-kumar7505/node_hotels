 const response = await Person.find({ work: workType });
      console.log('response fetched');
      res.status(200).json(response);