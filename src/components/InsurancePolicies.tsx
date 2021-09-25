import * as React from 'react';
import {observer} from "mobx-react";
import {Box, Grid, Stack, Text} from "@chakra-ui/react";


export const InsurancePolicies = observer(() => {


    return (
        <Grid templateColumns={'1fr 1fr 1fr'} columnGap={'30px'}>
            <Stack bg={'white'} padding={'24px'} alignItems={'center'} borderRadius={'4px'} spacing={'50px'}>
                <Box mt="30px">
                    <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.09408 45.5152C2.89818 45.9121 3.85755 45.8204 4.57198 45.2785L7.88531 42.7935V76.5185C7.88531 79.1326 10.0045 81.2518 12.6186 81.2518H69.4187C72.0328 81.2518 74.152 79.1326 74.152 76.5185V42.7935L77.4653 45.2785C78.1825 45.8163 79.1419 45.9029 79.9437 45.502C80.7455 45.1011 81.252 44.2816 81.252 43.3852V31.5518C81.252 30.8069 80.9013 30.1054 80.3053 29.6585L42.4387 1.25849C41.5972 0.627378 40.4401 0.627378 39.5986 1.25849L22.0853 14.3935V10.2518C22.0853 7.63768 19.9661 5.51849 17.352 5.51849H12.6186C10.0045 5.51849 7.88531 7.63768 7.88531 10.2518V25.0435L1.73198 29.6585C1.13604 30.1054 0.785314 30.8069 0.785314 31.5518V43.3852C0.780394 44.2864 1.28783 45.1123 2.09408 45.5152ZM31.552 76.5185V57.5852C31.552 52.3569 35.7904 48.1185 41.0186 48.1185C46.2469 48.1185 50.4853 52.3569 50.4853 57.5852V76.5185H31.552ZM69.4187 76.5185H55.2187V57.5852C55.2187 49.7427 48.8611 43.3852 41.0186 43.3852C33.1762 43.3852 26.8186 49.7427 26.8186 57.5852V76.5185H12.6186V39.2435L41.0186 17.9435L69.4187 39.2435V76.5185ZM12.6186 10.2518H17.352V17.9435L12.6186 21.4935V10.2518ZM5.51865 32.7352L41.0186 6.11016L76.5187 32.7352V38.6518L42.4387 13.0918C41.5972 12.4607 40.4401 12.4607 39.5986 13.0918L5.51865 38.6518V32.7352Z"
                            fill="#B8B8B8"/>
                    </svg>
                </Box>

                <Text textAlign={'center'} fontWeight={600} fontSize={14}>Нет полиса страхования недвижимости</Text>
            </Stack>

            <Stack bg={'white'} padding={'24px'} alignItems={'center'} borderRadius={'4px'} spacing={'50px'}>
                <Box mt="30px">
                    <svg width="114" height="81" viewBox="0 0 114 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M78.6929 0.500482C70.1453 0.448816 62.1048 4.55043 57.1289 11.5006C52.153 4.55043 44.1124 0.448816 35.5648 0.500482C20.0393 0.500482 10.3944 10.34 10.3944 26.1811C10.3538 30.0403 11.0136 33.8749 12.3417 37.4986H2.60535C1.5299 37.4986 0.658081 38.3704 0.658081 39.4459C0.658081 40.5213 1.5299 41.3931 2.60535 41.3931H14.1254C16.9365 45.9912 20.5186 50.0706 24.7146 53.4526C25.7116 54.3405 26.6794 55.2051 27.5849 56.0678C34.2056 62.3789 55.0219 79.1935 55.906 79.9062C56.6196 80.4821 57.6382 80.4821 58.3518 79.9062C59.2358 79.1935 80.0541 62.3808 86.6729 56.0678C87.5783 55.2051 88.5461 54.3405 89.5431 53.4526C93.7391 50.0706 97.3213 45.9912 100.132 41.3931H111.652C112.728 41.3931 113.6 40.5213 113.6 39.4459C113.6 38.3704 112.728 37.4986 111.652 37.4986H101.926C103.251 33.8743 103.907 30.0397 103.863 26.1811C103.863 10.34 94.2185 0.500482 78.6929 0.500482ZM14.289 26.1811C14.289 12.5385 22.2416 4.39502 35.5648 4.39502C43.798 4.36894 51.3958 8.81661 55.4036 16.0085C55.7728 16.607 56.4257 16.9714 57.1289 16.9714C57.8321 16.9714 58.485 16.607 58.8542 16.0085C62.862 8.81661 70.4597 4.36894 78.6929 4.39502C92.0162 4.39502 99.9688 12.5385 99.9688 26.1811C100.027 30.0721 99.2539 33.9307 97.7002 37.4986H86.3379C85.5478 37.4989 84.8362 37.9767 84.5367 38.7079L82.3674 31.1135C82.1268 30.2853 81.3702 29.7141 80.5078 29.7095H80.4961C79.6359 29.7095 78.8775 30.2739 78.6306 31.0979L74.9698 43.3034L70.7169 23.4607C70.5277 22.5747 69.7524 21.9363 68.8466 21.9205C67.9408 21.9047 67.1437 22.5157 66.9236 23.3945L63.3972 37.4986H53.2343C52.4442 37.4989 51.7326 37.9767 51.4331 38.7079L49.2639 31.1135C49.0233 30.2853 48.2666 29.7141 47.4042 29.7095C46.5274 29.6653 45.7415 30.2466 45.5271 31.0979L41.8662 43.3034L37.6134 23.4607C37.4241 22.5744 36.6483 21.9358 35.742 21.9204C34.8309 21.8878 34.0248 22.5061 33.8201 23.3945L30.2936 37.4986H16.5575C15.0039 33.9307 14.2304 30.0721 14.289 26.1811ZM86.9494 50.5453C85.9212 51.4644 84.9203 52.3563 83.9837 53.2501C78.3892 58.5875 61.7829 72.1113 57.1289 75.8851C52.4749 72.1113 35.8705 58.5875 30.2741 53.2501C29.3375 52.3563 28.3366 51.4644 27.3084 50.5453C24.064 47.8738 21.1748 44.7981 18.7112 41.3931H31.8144C32.7076 41.3931 33.4862 40.7855 33.7032 39.9191L35.5629 32.4805L39.6521 51.5365C39.8382 52.4062 40.59 53.0393 41.4787 53.0748C42.3654 53.102 43.1616 52.5351 43.426 51.6884L47.3575 38.5852L49.4255 45.8232C49.6601 46.6442 50.4022 47.2166 51.2559 47.2349C52.1012 47.2269 52.8533 46.6965 53.1448 45.903L54.6383 41.3931H64.918C65.8111 41.3931 66.5898 40.7855 66.8068 39.9191L68.6665 32.4805L72.7557 51.5365C72.9418 52.4062 73.6935 53.0393 74.5823 53.0748H74.6543C75.5146 53.0749 76.2729 52.5105 76.5198 51.6864L80.4513 38.5832L82.5193 45.8212C82.754 46.6422 83.4961 47.2146 84.3498 47.233C85.1926 47.2173 85.9408 46.6897 86.2386 45.9011L87.7419 41.3931H95.5466C93.0829 44.7981 90.1937 47.8738 86.9494 50.5453Z"
                            fill="#B8B8B8"/>
                    </svg>
                </Box>


                <Text textAlign={'center'} fontWeight={600} fontSize={14}>Нет полиса страхования жизни</Text>
            </Stack>

            <Stack bg={'white'} padding={'24px'} alignItems={'center'} borderRadius={'4px'} spacing={'50px'}>
                <Box mt="30px">
                    <svg width="76" height="96" viewBox="0 0 76 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M74.3174 16.3113L38.8174 0.7718C38.2137 0.508358 37.5277 0.508358 36.924 0.7718L1.42403 16.3113C0.561958 16.6876 0.00451301 17.5386 0.00402832 18.4792V55.6359C0.0168585 63.9862 4.02951 71.825 10.796 76.7181L35.3313 94.4137C36.8466 95.5105 38.8948 95.5105 40.4101 94.4137L64.9454 76.7205C71.7119 71.8273 75.7245 63.9886 75.7374 55.6382V18.4792C75.7369 17.5386 75.1794 16.6876 74.3174 16.3113ZM71.004 55.6382C70.9932 62.4682 67.7109 68.8796 62.1764 72.8818L37.8707 90.4117L13.565 72.8818C8.03045 68.8796 4.7482 62.4682 4.73736 55.6382V20.027L37.8707 5.52407L71.004 20.027V55.6382Z"
                            fill="#B8B8B8"/>
                        <path
                            d="M36.9249 11.1046L10.8916 22.5024C10.0295 22.8787 9.47204 23.7297 9.47156 24.6703V55.6381C9.47886 60.9481 12.0311 65.9328 16.3349 69.0429L36.4871 83.579C37.3138 84.1753 38.4294 84.1753 39.2561 83.579L59.4082 69.0429C63.7121 65.9328 66.2643 60.9481 66.2716 55.6381V24.6703C66.2711 23.7297 65.7136 22.8787 64.8516 22.5024L38.8182 11.1046C38.2146 10.8411 37.5285 10.8411 36.9249 11.1046ZM61.5382 26.2157V55.6381C61.531 59.4273 59.7096 62.9838 56.6392 65.2042L37.8716 78.7415L19.1039 65.2042C16.0335 62.9838 14.2121 59.4273 14.2049 55.6381V26.2157L37.8716 15.8568L61.5382 26.2157Z"
                            fill="#B8B8B8"/>
                        <path
                            d="M25.091 50.7463C24.0453 49.9621 22.5619 50.174 21.7777 51.2196C20.9934 52.2653 21.2053 53.7487 22.251 54.533L31.7177 61.633C32.1273 61.9402 32.6256 62.1063 33.1377 62.1063C33.2717 62.1058 33.4054 62.0948 33.5376 62.0732C34.1786 61.9632 34.7461 61.5943 35.1067 61.0531L54.0401 32.6531C54.5093 31.9497 54.5677 31.0493 54.1931 30.2911C53.8185 29.533 53.0679 29.0323 52.224 28.9776C51.3801 28.923 50.5712 29.3227 50.1019 30.0261L32.5555 56.3458L25.091 50.7463Z"
                            fill="#B8B8B8"/>
                    </svg>
                </Box>

                <Text textAlign={'center'} fontWeight={600} fontSize={14}>
                    Нет полиса страхования титула
                </Text>
            </Stack>


        </Grid>
    )
})
