//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './chatFlow.styles'


function ChatFLowStory(props) {
    const {sendMsg}=props
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : ''}
            style={styles.container}>

            <ScrollView style={{ flex: 1 }}>
                {/* {
                    chat?.map((msg, i) => {
                        return (
                            <View>
                                {
                                    msg?.message_text?.msg?.declineBy || msg?.message_text?.msg?.acceptedBy ?
                                        <OfferMessage chatDetail={chat[i]} roomDetail={roomDetail} userinfo={userInfo} isAccepted={isAccepted} />
                                        :
                                        <View>
                                            {
                                                msg.message_by == userInfo.id ?
                                                    < View style={{ alignSelf: 'flex-end' }}>
                                                        <ChatBubble
                                                            style={{ backgroundColor: "#EAEAEA", borderBottomEndRadius: normalize(0), borderBottomStartRadius: normalize(10) }}
                                                            chatDetail={chat[i]}
                                                            contractorId={roomDetail.contractor_user_id}
                                                            userId={userInfo.id}
                                                            modifyModal={() => modifyModal(modalizeModify)}
                                                            acceptJob={acceptJob}
                                                            onDecline={() => onDecline(modalizeModify)}
                                                        />
                                                    </View> :
                                                    < View style={{ alignSelf: 'flex-start' }}>
                                                        <ChatBubble
                                                            chatDetail={chat[i]}
                                                            contractorId={roomDetail.contractor_user_id}
                                                            userId={userInfo.id}
                                                            modifyModal={() => modifyModal(modalizeModify)}
                                                            acceptJob={acceptJob}
                                                            onDecline={() => onDecline(modalizeModify)}
                                                        />
                                                    </ View>
                                            }
                                        </View>
                                } */}


                                {/* {isActive && !assignJob ? (
                  <ChatBubble
                    activeContract={activeContract}
                    onDecline={onDecline}
                    onAccept={onAcceptContract}
                  />
                ) : null}

                {isJob ? (
                  <ChatBubble
                    description={description}
                    cost={cost}
                    AssignJob
                    text={'Cancel'}
                  />
                ) : null}
                  <OfferMessage isAccepted={isAccepted} /> */}
                            {/* </View>

                        )
                    })
                } */}

            </ScrollView>

            <View style={styles.typeBoxContainer}>
                {/* <View style={styles.circleButtonContainer}>
                    <TouchableOpacity onPress={chooseImage}>
                        <View style={styles.circleButton}>
                            <Image source={AssetsPath.camera} style={styles.image} />
                        </View>
                    </TouchableOpacity>
                    {roomDetail.contractor_user_id != userInfo.id ? (
                        <View>
                            <View>
                                <TouchableOpacity
                                    onPress={
                                        showPropsal
                                            ? () => toggleModal(modalizeRef)
                                            : togglePropsalButton
                                    }>
                                    <View style={styles.propsal}>
                                        <View style={{ flex: 0.25 }}>
                                            <Image source={AssetsPath.deal} style={styles.image} />
                                        </View>
                                        {showPropsal ? (
                                            <Animatable.View
                                                animation={'lightSpeedIn'}
                                                style={{ flex: 0.75 }}>
                                                <Text style={styles.proposalText}>Send proposal</Text>
                                            </Animatable.View>
                                        ) : null}
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : null}
                </View> */}

                <View style={styles.typeContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Type here'}
                        autoCorrect={false}
                        keyboardType="ascii-capable"
                        onChangeText={props.changeMsg}
                        value={props.userMsg}
                    />
                </View>
                {/* <TouchableOpacity onPress={() => { sendMsg() }}>
                    <Text>Send</Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                                style={{ backgroundColor: '#fb6f6f', height: 40, width: 40, borderRadius: 30, justifyContent:'center', alignItems:'center' }}
                                onPress={() => sendMsg()}>
                                {/* <Image
                                    source={require('../../assets/icon/send.png')}
                                    style={{ height: 25, width: 25 }} /> */}
                            </TouchableOpacity>
            </View>
        </KeyboardAvoidingView >
    )
}

//make this component available to the app
export default ChatFLowStory;
