const PodcatsDetails = ({ params }: { params: { podcastId: string } }) => {
  return <div>Podcats Id {params.podcastId}</div>;
};

export default PodcatsDetails;
