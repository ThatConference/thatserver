const speakerResolver = async (session, args, { db }) => {
  const results = [];

  await Promise.all(session.speakers.map(async (s) => {
    const speakerDeets = await db
      .collection('speakers')
      .doc(s)
      .get();

    results.push(speakerDeets.data());
  }));

  return results;
};

export default speakerResolver;
