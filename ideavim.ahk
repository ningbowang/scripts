; 便于调试
#SingleInstance force
; 当前窗口是idea时脚本才生效
#HotIf WinActive("ahk_exe idea64.exe")
; 检测输入法当前中英文模式
DetectHiddenWindows True
isEnglishMode(){
    hWnd := winGetID("A")
    result := SendMessage(
    0x283, ; Message : WM_IME_CONTROL
    0x001, ; wParam : IMC_GETCONVERSIONMODE
    0, ; lParam ： (NoArgs)
    , ; Control ： (Window)
    ; Retrieves the default window handle to the IME class.
    "ahk_id " DllCall("imm32\ImmGetDefaultIMEWnd", "Uint", hWnd, "Uint")
    )
    ; 微软拼音输入法, 中文是1, 英文是0
    return result == 0
}

Escape::{
    if(!isEnglishMode()){
        Send "{Shift}"
        Send "{Escape}"
    }else{
        Send "{Escape}" 
    }
}

; ^u::{
;     isEnglishMode()
; }

