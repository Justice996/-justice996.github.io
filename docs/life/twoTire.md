### 卡车后轴为什么有两个轮胎？

在读《计算机组成与设计:硬件/软件接口 RISC-V版(原书第2版)》的时候，看到计算机体系结构中的7个伟大思想，其中的冗余性特性时候，举了个有趣的列子
书中写道：`` 
由于任何物理设备都可能发生故障，因此我们通过引入冗余组件来使系统可靠，该组件在系统发生故障时可以替代失效组件并帮助检测故障。我们使用牵引式挂车（即卡车）来理解可靠性：卡车后轴两侧都具有双轮胎，在一个轮胎出现故障时卡车仍然可以继续行驶。​（当然，在一个轮胎出现故障时，卡车司机会立即前往修理厂进行修理，从而恢复其冗余性。​）
``感觉很有趣，便搜索了一下。果然很多东西都是相通的。
---
七个伟大思想是：
1. 使用抽象简化设计
2. 加速经常性事件
3. 通过并行提高性能
4. 通过流水线提高性能
5. 通过预测提高性能
6. 储存层次
7. 通过冗余性提高可靠性
---
1. **增加承载能力**  
   双胎可以分担卡车后轴上的重量，减少单个轮胎承受的压力，从而提高车辆的承载能力。这对于运输重型货物的卡车尤为重要。

2. **增强稳定性**  
   双轮设计增加了车轮接触地面的面积，提高了车辆的稳定性，尤其在转弯、刹车或高速行驶时，可以减少侧倾的风险。

3. **提高安全性**  
   如果一个轮胎在行驶过程中爆胎或失去气压，双轮系统可以让另一个轮胎继续支持车辆，降低事故的风险，给驾驶员时间安全停车。

4. **改善牵引力**  
   双胎有助于在不良路况（如泥泞或雪地）下提高抓地力，确保卡车能够更顺利地行驶。

这些设计都是为了应对卡车所需承载的高重量和长时间行驶的要求。


### 前轴为什么又不需要？

1. 转向需求
前轴承担着车辆的转向任务，单个轮胎设计使转向更加灵活。双胎会增加转向的阻力和复杂性，影响车辆的转向性能。

2. 负载较轻
前轴通常只承担车辆的部分重量，主要是发动机、驾驶室等重量，而大部分载重集中在后轴。因此，前轴不需要像后轴那样使用双胎来分担重载。

3. 减少磨损和成本
前轴轮胎的磨损较少，因为其主要功能是转向而不是承载重物。使用单个轮胎可以减少轮胎的磨损，同时降低维护和更换轮胎的成本。

4. 节省空间
单轮设计占用空间较小，有助于在转向时为车轮提供更多的活动空间，防止车轮与车身其他部位干涉。

总的来说，前轴轮胎的设计是为了优化转向性能、降低成本和满足前轴的较低承载需求。