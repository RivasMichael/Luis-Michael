Public dbprin As Object
Public temprst As New ADODB.Recordset
Dim sPath   As String
Sub conectarSQL() ''Caja negra especializada en conectarse a BD
    Dim Conexion As String
    ''Esta sección se usa cuando se quiere conectar a SQL SERVER
    Set dbprin = CreateObject("ADODB.Connection")
    Servidor = "JOSEPH-PC"
                    
    Usuario = "sa"
    pass = "123456789"
    Base = "bdModelo"        
    Conexion = "Provider=SQLOLEDB.1;Persist Security Info=True;User ID=" & Usuario & ";Data Source = " & Servidor & "; Password = " & pass & "; Use Procedure for Prepare=1;Auto Translate=True;Packet Size=4096;Workstation ID=" & Servidor & ";Use Encryption for Data=False;Tag with column collation when possible=False;Initial Catalog = " & Base & ""
    dbprin.ConnectionString = Conexion
    dbprin.Open    
End Sub
Sub conectarACCESS() ''Caja negra especializada en conectarse a BD
    Dim Conexion As String
    sPath = "D:\2022-1\MIS\Semana_11\BdModelo.accdb"
    Set dbprin = CreateObject("ADODB.Connection")
    With dbprin
		.Provider = "Microsoft.ACE.OLEDB.12.0"
		.ConnectionString = "Provider=Microsoft.ACE.OLEDB.12.0; Data Source=" & sPath & " ;"
        .Open
        End With
End Sub
Sub conectarExcel()
	sPath = ActiveWorkbook.FullName
    Set dbprin = CreateObject("ADODB.Connection")
    With dbprin
		.Provider = "Microsoft.ACE.OLEDB.12.0"
		.ConnectionString = Format("Data Source=" & sPath & ";Extended Properties='Excel 12.0 XML;HDR=Yes';")
        .Open
    End With
End  sub
Public Function AsignaRst(RstMant As ADODB.Recordset, TxtSql As String, Xdbprin As ADODB.Connection)
    If RstMant.State = adStateOpen Then RstMant.Close
    With RstMant
        .CursorLocation = adUseClient
        .CursorType = adOpenStatic
        .LockType = adLockOptimistic
        .ActiveConnection = dbprin
        ''.Open TxtSql, dbprin, adCmdText, , adAsyncFetch
        .Open TxtSql, , , , adAsyncFetch
    End With
    
End Function
Public Function nextId(nombTbl As String, nombCamp As String, swSql As Boolean) As Integer
    Dim RstTemp As New ADODB.Recordset
    Dim sql As String
    Dim i As Integer
    If swSql = True Then
        sql = "SELECT count(" & nombCamp & ") FROM  [" & nombTbl & "]"
    Else
        sql = "SELECT count(" & nombCamp & ") FROM  [" & nombTbl & "$]"  ''Esta instrucción se ejecutará
                                                                        ''para cuando se conecta a excel como bd
    End If
    
    Debug.Print sql
    AsignaRst RstTemp, sql, dbprin
    '' RstTemp.RecordCount
    If RstTemp.RecordCount > 0 Then
        If RstTemp.Fields(0).Value = 0 Then
            i = 101
        Else
            If swSql = True Then
                sql = "SELECT max(" & nombCamp & ") FROM  [" & nombTbl & "]"
            Else
                sql = "SELECT max(" & nombCamp & ") FROM  [" & nombTbl & "$]"
            End If
            Debug.Print sql
            AsignaRst RstTemp, sql, dbprin
            If RstTemp.RecordCount > 0 Then
                i = RstTemp.Fields(0).Value + 1
            End If
        End If
    End If
    nextId = i
End Function
Public Function idExp(nombTbl As String, campId As String, nombCampBusq As String, cad As String, swSql As Boolean) As Integer
    Dim RstTemp As New ADODB.Recordset
    Dim idCamp As Integer
    Dim sql As String
    If swSql = True Then
        sql = "SELECT  " & campId & " from [" & nombTbl & "] where " & nombCampBusq & " = '" & cad & "'"
    Else
        sql = "SELECT  " & campId & " from [" & nombTbl & "$] where " & nombCampBusq & " = '" & cad & "'"
    End If
    Debug.Print sql
    AsignaRst RstTemp, sql, dbprin
    idExp = RstTemp.Fields(0).Value
End Function
Public Function getFecha() As String
    Dim RstTemp As New ADODB.Recordset
    Dim sql As String
    sql = "select convert(varchar, getdate(), 111) as fecha"
    Debug.Print sql
    AsignaRst RstTemp, sql, dbprin
    getFecha = RstTemp.Fields(0).Value
End Function









