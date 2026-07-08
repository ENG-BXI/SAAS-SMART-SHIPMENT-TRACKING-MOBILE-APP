type TUsePoint = {
  currentPointName?: string;
  points?: {
    id: string;
    lat: string;
    lng: string;
    name: string;
    order: number;
    wayId: string;
  }[];
};
function usePoint({currentPointName, points}: TUsePoint) {
  const pointLength = points?.length ?? 0;
  const currentPointIndex = points?.findIndex(point => point.name === currentPointName) ?? 0;
  const completedLength = currentPointIndex >= 0 ? currentPointIndex + 1 : 0;
  const remainderLength = pointLength - completedLength;
  const progress = Math.round((completedLength / pointLength) * 100);
  const sortedPoints = [...(points ?? [])].sort((a, b) => a.order - b.order);
  const currentIndex = sortedPoints.findIndex(point => point.name === currentPointName);
  const currentPoint = currentIndex >= 0 ? sortedPoints[currentIndex] : null;
  const nextPoint = currentIndex >= 0 && currentIndex < sortedPoints.length - 1 ? sortedPoints[currentIndex + 1] : currentPoint;
  const nextPointName = nextPoint?.name ?? 'No next point';

  return {pointLength, completedLength, remainderLength, progress, currentIndex, currentPoint, nextPointName};
}
export default usePoint;
