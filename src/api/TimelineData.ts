
import type { TimelineEvent } from '../types/Timeline.types'

export default async function getTimelineData(): Promise<TimelineEvent[]> {
    return [
        {
            id: "1",
            title: "Event 1",
            subtitle: "2021-01-01",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed eleifend ipsum. Donec mollis in metus a eleifend. Fusce efficitur eros vitae augue dignissim, sit amet sollicitudin urna pretium. Integer consectetur id mauris nec tempus. Phasellus ut gravida urna. Ut tempus sollicitudin enim. Nullam eget vehicula lectus, in elementum tortor. Nulla tempus lorem et eros eleifend, at suscipit augue tempor. Cras sit amet mauris sit amet justo interdum bibendum eget at dui. Etiam lectus massa, bibendum vel hendrerit sed, tincidunt sit amet nunc. Mauris sed massa dapibus, dapibus ante ut, accumsan dui.",
            image: "/apple-touch-icon.png",
            imageAlt: "Image for event 1",
            imageWidth: 500,
            imageHeight: 500,
        },
        {
            id: "2",
            title: "Event 2",
            subtitle: "2021-01-02",
            description: "Aliquam a sem cursus, placerat mauris ac, pulvinar nulla. Nunc et suscipit dui. Nunc et accumsan nulla. Pellentesque sit amet nisi eget ligula faucibus posuere. Aliquam vitae est lacus. Praesent vitae purus sit amet felis commodo placerat non non neque. Donec et vulputate nibh. Praesent ac diam ut erat bibendum vestibulum a vel ante. Donec sollicitudin congue ultrices.Donec euismod facilisis est, quis tincidunt eros scelerisque tincidunt. Maecenas at lobortis justo, vel gravida leo. Pellentesque faucibus id nulla vel sagittis. Duis in accumsan dolor. Proin ullamcorper mattis urna, eget consequat velit euismod a. Ut egestas, urna nec venenatis convallis, metus est fringilla ex, a imperdiet neque lectus a magna. Maecenas volutpat posuere sem, cursus imperdiet ligula. Sed vel neque ac ipsum venenatis laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque facilisis vel purus et lacinia. Morbi mattis finibus orci sed fermentum. Donec convallis eu orci vel pulvinar. Curabitur et ex ex. Donec dictum massa nec nisl elementum dapibus. Praesent eget ultrices turpis. Mauris ac aliquet erat.",
            image: "/apple-touch-icon.png",
            imageAlt: "Image for event 2",
            imageWidth: 500,
            imageHeight: 500,
        },
        {
            id: "3",
            title: "Event 3",
            subtitle: "2021-01-03",
            description: "Quisque hendrerit rutrum convallis. Ut a finibus mauris, eget pellentesque quam. Donec sodales varius turpis, sed efficitur diam dapibus feugiat.",
            image: "/apple-touch-icon.png",
            imageAlt: "Image for event 3",
            imageWidth: 500,
            imageHeight: 500,
        },
    ]
}